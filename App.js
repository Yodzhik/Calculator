import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './App.css';
import { useState } from 'react';

function App() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "="]
  const signs = ['+', '-', '*', '/', '(', ')']
  const [textInput, setTextInput] = useState('')
  const [result, setResult] = useState('')
  
  const calculateResult = () => {
    try {
      const calculatedResult = eval(textInput);
      setTextInput(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
       <Container>
        <Row>
          <Col xs={12} lg={6} xl={3}> 
          <Card>
          <Card.Body id='calcContainer'>
              <Form.Control value={textInput} disabled className={'mb-2'} size="lg" type="text" placeholder="0" />
            <Row className={'p-0 m-0'}>
                  {signs.map((b) => 
                      <Col xs={4} className={'d-flex mb-1 p-0 m-0 justify-content-center'}>
                        <Button  onClick={() => setTextInput(prev => prev+String(b))} size={'lg'} variant={'warning'} className={'lh-1'} key={b}>{b}</Button>
                      </Col>
                      )}
                  </Row>
                  <Row className='m-0 p-0'>
                    {nums.map((b) => 
                      <Col xs={4} className={'d-flex mb-1 p-0 m-0 justify-content-center'}>
                        <Button onClick={() => b === '=' ? calculateResult() :  setTextInput(prev => prev+String(b))} className={''} size={'lg'} variant={b === '=' ? 'success' :'dark'} key={b}>{b}</Button>
                      </Col>)
                    }
                  </Row>
          </Card.Body>
        </Card>
          </Col>
        </Row>
       </Container>

    </div>
  );
}

export default App;
