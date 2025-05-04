import React from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

type StripePaymentFormProps = {
  totalAmount: number;
  shippingData: { name: string; address: string; city: string; country: string; phone: string };
  cartItems: any[]; // Asegúrate de que cartItems tenga la estructura correcta
};

const StripePaymentForm: React.FC<StripePaymentFormProps> = ({
  totalAmount,
  shippingData,
  cartItems,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const paymentData = {
      totalAmount,
      shippingData,
      cartItems,
    };

    alert('Pago simulado exitosamente ✅');

    // Navegar con datos de pago
    navigate('/Confirmacion', { state: paymentData });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Formulario de pago */}
      <label className="block">
        <span className="text-sm">Número de Tarjeta</span>
        <div className="p-2 border rounded">
          <CardNumberElement />
        </div>
      </label>

      <label className="block">
        <span className="text-sm">Fecha de Expiración (MM/AA)</span>
        <div className="p-2 border rounded">
          <CardExpiryElement />
        </div>
      </label>

      <label className="block">
        <span className="text-sm">CVV</span>
        <div className="p-2 border rounded">
          <CardCvcElement />
        </div>
      </label>

      <button
        type="submit"
        disabled={!stripe || !elements}
        className="mt-4 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Pagar ${totalAmount}
      </button>
    </form>
  );
};

export default StripePaymentForm;
