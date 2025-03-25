import { useState } from "react";
import { RootContainer, Input, InputGroup, Label, Select, Title } from "./styled";

const Home = () => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [dimensions, setDimensions] = useState({ large: '', width: '', height: '' });
  const [serviceType, setServiceType] = useState('');
 
  return (
    <RootContainer>
      <Title>Enter your Shipment</Title>
        <InputGroup>
          <Label>City Origen</Label>
          <Input
            type="text"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
            placeholder="Enter origen city"
          />
        </InputGroup>

        <InputGroup>
          <Label>City Destination</Label>
          <Input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            placeholder="Enter destination city"
          />
        </InputGroup>

        <InputGroup>
          <Label>dimensions</Label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Input
              type="number"
              value={dimensions.large}
              onChange={(e) => setDimensions({ ...dimensions, large: e.target.value })}
              placeholder="Largo"
            />
            <Input
              type="number"
              value={dimensions.width}
              onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
              placeholder="Ancho"
            />
            <Input
              type="number"
              value={dimensions.height}
              onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
              placeholder="Alto"
            />
          </div>
        </InputGroup>

        <InputGroup>
          <Label>Product type</Label>
          <Select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
            <option value="">Select service type</option>
            <option value="normal">Paquetes</option>
            <option value="express">Documentos</option>
          </Select>
        </InputGroup>

    </RootContainer>
  );
};

export default Home;