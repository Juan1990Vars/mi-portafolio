import emailjs from 'emailjs-com'
import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/contact.css'

const Contact = () => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => { // Cambié el orden de los parámetros
    e.preventDefault(); // Añadí preventDefault para evitar que el formulario se envíe automáticamente
    emailjs.sendForm('service_tszmdrl', 'template_x4lxoji', e.target, '3f55JVY4GwpAmD3Ox', data)
      .then((res) => {
        console.log(res);
        reset({
          nombre: '',
          empresa: '',
          correo: '',
          telefono: '',
          mensaje: ''
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    // Todos los formularios tienen un evento onSubmit
    <div id='card' className='card'>
      <div className='card__div'>
        <h2 className='card__title'>Contacto</h2>
      </div>
      <hr />
      <form className='card__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='div__form'>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" {...register('nombre', {
            required: true
          }
          )} placeholder='🧑‍💼 Ingresa Tu Nombre' />
          {errors.nombre?.type === 'required' && <p className='p__required'>El campo nombre es requerido</p>}
        </div>

        <div className='div__form'>
          <label htmlFor="empresa">Empresa</label>
          <input type="text" {...register('empresa', {
          })} placeholder='🏢 Ingrese el nombre de su Empresa' />
        </div>

        <div className='div__form'>
          <label htmlFor="correo">Email</label>
          <input type="email" {...register('correo', {
            required: true, 
          })} placeholder='📧 Ingrese su Correo' />
          {errors.nombre?.type === 'required' && <p className='p__required'>El campo correo es requerido</p>}
        </div>

        <div className='div__form'>
          <label htmlFor="telefono">Telefono</label>
          <input type="text" {...register('telefono', {
          })} placeholder='☎️ Telefono' />
        </div>

        <div className='div__form'>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea className='textarea' {...register('mensaje')} id="" cols="26" rows="10" placeholder='📩 Mensaje'></textarea>
        </div>
        <div className='button'>
          <button className='button__bx'><i className='bx bxl-telegram' ></i> Enviar</button>
        </div>
        <br />
      </form>
      <br />
    </div>
  )
}

export default Contact