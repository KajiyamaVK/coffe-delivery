import { Input, Division, Form } from './styles'

export default function Fields() {
  return (
    <Form>
      <Input placeholder="Postal Code" width="12.5rem" />
      <Input placeholder="Street address" width="100%" />
      <Division>
        <Input placeholder="Number" width="16rem" />
        <Input placeholder="Address Line 2" width="100%" />
      </Division>
      <Division>
        <Input placeholder="Suburb" width="16rem" />
        <Input placeholder="City" width="100%" />
        <Input placeholder="State" width="3.75rem" />
      </Division>
    </Form>
  )
}
