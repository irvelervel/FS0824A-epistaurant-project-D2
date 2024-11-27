import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

// name -> string
// phone -> string/number
// numberOfPeople -> string/number
// smoking -> boolean
// dateTime -> date string (ISO format)
// specialRequests -> string (facoltativo)

// Ogni volta che un componente React deve interagire con un form,
// questo componente deve possedere uno STATE

class Reservation extends Component {
  state = {}

  render() {
    return (
      <Form className="text-start">
        <Form.Group className="mb-3">
          <Form.Label>Nome prenotazione</Form.Label>
          <Form.Control type="text" placeholder="Mario Rossi" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Numero di telefono</Form.Label>
          <Form.Control type="tel" placeholder="340xxxxxxx" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quanti sarete?</Form.Label>
          <Form.Select aria-label="Numero di persone">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Tavolo all'esterno?" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quando arrivi?</Form.Label>
          <Form.Control
            type="datetime-local"
            required
            min={`${new Date().getFullYear()}-${
              new Date().getMonth() + 1
            }-${new Date().getDate()}T00:00`}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Allergie, richieste particolari?</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Button variant="success" type="submit">
          Invia prenotazione
        </Button>
      </Form>
    )
  }
}

export default Reservation
