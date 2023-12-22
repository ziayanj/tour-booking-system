import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Button, Form, Select } from 'antd';

import CustomInput from '../CustomInput/CustomInput';

import miamiImage from '../../assets/images/miami.png';
import countriesList from '../../utils/countriesList';
import { createBooking, getBookingDetails, updateBooking } from '../../services/bookingsService';

import './TourForm.scss';

const TourForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const { Option } = Select;
  const [form] = Form.useForm()

  const [bookingDetails, setBookingDetails] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
  
      getBookingDetails(id)
        .then(data => setBookingDetails(data))
        .catch(_ => setError(true))
        .finally(() => setLoading(false));
    }
  }, [id]);

  useEffect(() => {
    form.setFieldsValue(bookingDetails)
   }, [form, bookingDetails])   

  const countryCodeSelect = useMemo(() => (
    <Select defaultValue="+92">
      {countriesList.map(country => (
        <Option key={country.name} value={country.code}>{country.code}</Option>
      ))}
    </Select>
  ), []);

  if (error) {
    return <p>Invalid booking selected!</p>;
  }

  if (loading) {
    return <p>Loading booking details...</p>;
  }

  const handleSubmit = (values) => {
    const bookingMethod = id ? updateBooking : createBooking;

    const itemId = id || searchParams.get('tour_id');

    if (itemId) {
      bookingMethod(values, itemId)
        .then(_ => navigate('/my-tours'))
        .catch(_err => console.error(`Error while ${id ? 'updating' : 'creating'} booking`));
    } else {
      navigate('/my-tours');
    }
  };

  return (
    <div className="tour-form-container">
      <div className='form-container'>
        <h1 className='tour-form-header'>{id ? 'Update' : 'Confirm'} Your Booking</h1>

        <Form
          layout='vertical'
          className='booking-form'
          form={form}
          initialValues={bookingDetails}
          onFinish={handleSubmit}
        >
          <CustomInput label="Name" name="name" type="text" />
          <CustomInput label="Email" name="email" type="email" />
          <CustomInput label="Phone" name="phone" type="tel" addonBefore={countryCodeSelect} />
          <div className='family-info'>
            <CustomInput
              label="Number of Adults"
              name="numAdults"
              type="number"
              errMessage="Please input number of adults"
            />
            <CustomInput
              label="Number of Children"
              name="numChildren"
              type="number"
              errMessage="Please input number of children"
            />
          </div>
          <Form.Item
            label='Payment Method'
            name='paymentMethod'
            rules={[{ required: true, message: "Please select a payment method"}]}
          >
            <Select size='large'>
              <Select.Option value="stripe">Stripe</Select.Option>
              <Select.Option value="paypal">PayPal</Select.Option>
              <Select.Option value="bank">Bank Transfer</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-btn">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <img src={miamiImage} alt="miami" className="tour-image" />
    </div>
  );
};

export default TourForm;
