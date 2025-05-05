import React, { useState } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { notifySuccess, notifyError } from '../../utils/toastConfig';

type StripePaymentFormProps = {
  totalAmount: number;
  shippingData: { name: string; address: string; city: string; country: string; phone: string };
  cartItems: any[];
};

const StripePaymentForm: React.FC<StripePaymentFormProps> = ({
  totalAmount,
  shippingData,
  cartItems,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  // Estado para verificar si los campos están completos
  const [cardComplete, setCardComplete] = useState({
    number: false,
    expiry: false,
    cvc: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { number, expiry, cvc } = cardComplete;

    if (!number || !expiry || !cvc) {
      notifyError('Por favor completa todos los datos de la tarjeta correctamente.');
      return;
    }

    const paymentData = {
      totalAmount,
      shippingData,
      cartItems,
    };

    notifySuccess('Pago realizado exitosamente');
    navigate('/Confirmacion', { state: paymentData });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-sm">Número de Tarjeta</span>
        <div className="p-2 border rounded">
          <CardNumberElement
            onChange={(e) => setCardComplete((prev) => ({ ...prev, number: e.complete }))}
          />
        </div>
      </label>

      <label className="block">
        <span className="text-sm">Fecha de Expiración (MM/AA)</span>
        <div className="p-2 border rounded">
          <CardExpiryElement
            onChange={(e) => setCardComplete((prev) => ({ ...prev, expiry: e.complete }))}
          />
        </div>
      </label>

      <label className="block">
        <span className="text-sm">CVV</span>
        <div className="p-2 border rounded">
          <CardCvcElement
            onChange={(e) => setCardComplete((prev) => ({ ...prev, cvc: e.complete }))}
          />
        </div>
      </label>

      <button
        type="submit"
        disabled={
          !stripe || !elements || !cardComplete.number || !cardComplete.expiry || !cardComplete.cvc
        }
        className={`mt-4 w-full p-2 rounded text-white ${
          !cardComplete.number || !cardComplete.expiry || !cardComplete.cvc
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        Pagar ${totalAmount}
      </button>
    </form>
  );
};

export default StripePaymentForm;
