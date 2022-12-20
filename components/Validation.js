const validateEmail = ({ email, setEmailError }) => {
  const emailRegular = '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/'
  return email && !email.match(emailRegular)
    ? setEmailError('Digite um email válido')
    : setEmailError('')
}

export { validateEmail }
