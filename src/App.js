import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './App.css';
import { useState } from 'react';

function App() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."]
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
          <Col xs={12} lg={6} xl={4}> 
          <Card>
          <Card.Body id='calcContainer'>
            <Form.Control value={textInput} disabled className={'mb-2'} size="lg" type="text" placeholder="0" />
            
            <div className={''}>
              <Row>
                <Col xs={7}>
                  <Row>
                    {nums.map((b) => 
                      <Col  xs={4} className={'d-flex mb-1 p-0 m-0 justify-content-center '}>
                        <Button onClick={() => setTextInput(prev => prev+String(b))} className={''} size={'lg'} variant={'dark'} key={b}>{b}</Button>
                      </Col>)
                    }
                  </Row>
                </Col>
                <Col xs={5} className='h-100'>
                  {signs.map((b) => 
                      <Button  onClick={() => setTextInput(prev => prev+String(b))} size={'lg'} variant={'warning'} className={'mb-1 lh-1 me-3'} key={b}>{b}</Button>
                    )}
                     <Button onClick={calculateResult} size={'lg'} variant={'success'} className={'justify-content-right'}> = </Button>
                     
                </Col>
              </Row>
            </div>  
          </Card.Body>
        </Card>
          </Col>
        </Row>
       </Container>

    </div>
  );
}

export default App;
