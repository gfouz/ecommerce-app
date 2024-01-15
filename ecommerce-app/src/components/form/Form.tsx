'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { dataSchema, InputData } from '../../schemas/form.input.schema';
import { useContactService } from '../../hooks/useContactService';
import Input from '../input/Input';
import Tooltip from 'components/tooltip/Tooltip';

const defaultMessage = 'Hello Giovanoti. I want to hire you!';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputData>({
    resolver: zodResolver(dataSchema),
  });

  const { data, error, fetchData } = useContactService();

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    const newdata = { ...data, message: defaultMessage };
    fetchData(newdata);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Tooltip info='It will be a default message.'>
        <h3 className='text-[--sky-color] text-center mt-6 mb-2'>
          Your email to Send a contact message.
        </h3>
      </Tooltip>

      <Input label='email' register={register} errors={errors} />
      <div className='text-red-400'>
        {data.ok ? <h4>Message sent to Giovani!</h4> : null}
        {!errors?.email?.message && error ? <h4>{error?.message}</h4> : null}
      </div>
    </form>
  );
};
export default Form;
//welcome.b9e6447a
//welcome.b9e6447a.jpg
