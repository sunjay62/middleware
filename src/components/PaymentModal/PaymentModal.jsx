'use client';

import { useState } from 'react';
import { Modal, Button } from 'antd';
import axios from 'axios';

const PaymentModal = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleCheckoutClick = async () => {
    try {
      const response = await axios.post('/');
      if (response.status === 200) {
        console.log('Handler function reached');
        setShowPaymentModal(true);
      }
    } catch (error) {
      console.error('Error showing payment modal:', error);
    }
  };

  const handleCancel = () => {
    setShowPaymentModal(false);
  };

  return (
    <div>
      <Button onClick={handleCheckoutClick}>Checkout</Button>
      <Modal
        title="Modal Pembayaran"
        open={showPaymentModal}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Tutup
          </Button>,
          <Button key="submit" type="primary" onClick={handleCancel}>
            Konfirmasi
          </Button>,
        ]}
      >
        {/* Isi modal pembayaran di sini */}
        <p>Isi modal pembayaran di sini...</p>
      </Modal>
    </div>
  );
};

export default PaymentModal;
