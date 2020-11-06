import * as React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// https://fontawesome.com/v4.7.0/icons/

const ErrorGenerator = ({ action ,  value}) => {
    console.log("valeur du value", value)
 return (
    <p>
      <Button variant="primary" style={{marginBottom:'5px', marginTop:'15px'}} onClick={() => action('ACTION_ERROR_IN_PUT')}>Action error in put :  </Button>{' '} <br/>
      <Button variant="secondary" style={{marginBottom:'5px'}} onClick={() => action('ACTION_ERROR_IN_SELECT')}>Action error in select</Button>{' '}<br/>
      <Button variant="success"  style={{marginBottom:'5px'}} onClick={() => action('ACTION_ERROR_IN_CALL_SYNC')}>Action error in call sync</Button>{' '}<br/>
      <Button variant="warning" style={{marginBottom:'5px'}} onClick={() => action('ACTION_ERROR_IN_CALL_ASYNC')}>Action error in call async</Button>{' '}<br/>
      <Button variant="danger" style={{marginBottom:'5px'}} onClick={() => action('ACTION_ERROR_IN_CALL_INLINE')}>Action error in call inline</Button>{' '}<br/>
      <Button variant="light"  style={{marginBottom:'5px'}} onClick={() => action('ACTION_ERROR_IN_FORK')}>Action error in fork</Button>{' '}<br/>
      <Button variant="link" style={{marginBottom:'5px'}} onClick={() => action('ACTION_ERROR_IN_SPAWN')}>Action error in spawn</Button>{' '}<br/>
      <Button variant="primary" style={{marginBottom:'5px'}} onClick={() => action('ACTION_ERROR_IN_RACE')}>Action error in race</Button>{' '}<br/>
      <Button variant="secondary" style={{marginBottom:'5px'}} onClick={() => action('ACTION_CAUGHT_ERROR')}>Action caught error</Button>{' '}<br/>
      <Button variant="success" style={{marginBottom:'5px'}} onClick={() => action('ACTION_INLINE_SAGA_ERROR')}>Action error in inlined saga</Button>{' '}<br/>
      <Button variant="danger" style={{marginBottom:'5px'}}  onClick={() => action('ACTION_IN_DELEGATE_ERROR')}>Action error in delegated saga</Button>{' '}<br/>
      <Button variant="secondary" style={{marginBottom:'5px'}} onClick={() => action('ACTION_FUNCTION_EXPRESSION_ERROR')}>
        Action error in saga as function expression
      </Button><br/>
      <Button variant="warning"  style={{marginBottom:'5px'}} onClick={() => action('ACTION_ERROR_IN_RETRY')}>Error in retry</Button><br/>
      <Button variant="secondary" onClick={() => action('ACTION_ERROR_PRIMITIVE')}>Error as a primitive</Button><br/>
    </p>
  )
}

ErrorGenerator.propTypes = {
  action: PropTypes.func.isRequired,
}

export default ErrorGenerator
