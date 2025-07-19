import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//const [output, setOutput] = useState(null);
const defaultSupplier = {
    id: '',
    name: '',
    contactName: '',
    email: '',
    phone: '',
    rfc: '',
    addressDetails: {
        street: '',
        city: '',
        state: '',
        zipCode: ''
    },
    isActive: true,
    createdAt: new Date().toISOString()
};

export default function SupplierForm({ data }) {
    const [output, setOutput] = useState(null);
    const [supplier, setSupplier] = useState(data || defaultSupplier);
    const [formData, setFormData] = useState({
        contactName: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        isActive: true
    });

    // Prellenar los campos una vez al montar o si cambia "data"
    useEffect(() => {
        const sup = data || defaultSupplier;
        setSupplier(sup);
        setFormData({
            contactName: sup.contactName,
            email: sup.email,
            phone: sup.phone,
            street: sup.addressDetails?.street || '',
            city: sup.addressDetails?.city || '',
            state: sup.addressDetails?.state || '',
            zipCode: sup.addressDetails?.zipCode || '',
            isActive: sup.isActive
        });
    }, [data]);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        const payload = {
            name: supplier.name,
            contactName: formData.contactName,
            email: formData.email,
            phone: formData.phone,
            rfc: supplier.rfc,
            createdAt: new Date(supplier.createdAt).toISOString().split('T')[0],
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            active: formData.isActive
        };

        try {
            const response = await apiService.post('/suppliers/update', payload);
            alert('Proveedor actualizado correctamente');
            console.log('✅ Response:', response.data);
        } catch (error) {
            console.error('❌ Error al actualizar proveedor:', error);
            alert('Hubo un error al actualizar el proveedor');
        }
    };

    return (
        <Container>
            <Section>
                <Header>
                    <Name>{supplier.name}</Name>
                    <Badge active={supplier.isActive}>{supplier.isActive ? 'Activo' : 'Inactivo'}</Badge>
                </Header>
                <InfoRow>
                    <Label>ID Proveedor:</Label>
                    <Value>{supplier.id}</Value>
                </InfoRow>
                <InfoRow>
                    <Label>RFC:</Label>
                    <Value>{supplier.rfc}</Value>
                </InfoRow>
                <InfoRow>
                    <Label>Fecha Creación:</Label>
                    <Value>{new Date(supplier.createdAt).toLocaleDateString('es-MX')}</Value>
                </InfoRow>
            </Section>

            <Section>
                <SubTitle>Editar datos del proveedor</SubTitle>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <InputField>
                            <Label htmlFor="contactName">Nombre de Contacto</Label>
                            <Input
                                id="contactName"
                                name="contactName"
                                value={formData.contactName}
                                onChange={handleChange}
                                required
                            />
                        </InputField>
                        <InputField>
                            <Label htmlFor="email">Correo Electrónico</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </InputField>
                    </InputGroup>

                    <InputGroup>
                        <InputField>
                            <Label htmlFor="phone">Teléfono</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                pattern="[0-9]{7,15}"
                                placeholder="Solo números"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </InputField>
                        <CheckboxField>
                            <CheckboxLabel htmlFor="isActive">
                                <CheckboxInput
                                    type="checkbox"
                                    id="isActive"
                                    name="isActive"
                                    checked={formData.isActive}
                                    onChange={handleChange}
                                />
                                Activo
                            </CheckboxLabel>
                        </CheckboxField>
                    </InputGroup>

                    <SubTitle>Dirección</SubTitle>
                    <InputGroup>
                        <InputField>
                            <Label htmlFor="street">Calle y Número</Label>
                            <Input
                                id="street"
                                name="street"
                                value={formData.street}
                                onChange={handleChange}
                                required
                            />
                        </InputField>
                        <InputField>
                            <Label htmlFor="city">Ciudad</Label>
                            <Input
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </InputField>
                    </InputGroup>

                    <InputGroup>
                        <InputField>
                            <Label htmlFor="state">Estado</Label>
                            <Input
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </InputField>
                        <InputField>
                            <Label htmlFor="zipCode">Código Postal</Label>
                            <Input
                                id="zipCode"
                                name="zipCode"
                                pattern="[0-9]{4,10}"
                                value={formData.zipCode}
                                onChange={handleChange}
                                required
                            />
                        </InputField>
                    </InputGroup>

                </Form>
            </Section>

            {output && (
                <Output>
                    <pre>{JSON.stringify(output, null, 2)}</pre>
                </Output>
            )}
        </Container>
    );
}

// Styled Components

const Container = styled.div`
  //max-width: 700px;
  //margin: 2rem auto;
  //padding: 1rem;
  //background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
`;

const Section = styled.section`
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

const Header = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.85rem;
  color: white;
  background-color: ${({ active }) => (active ? '#28a745' : '#dc3545')};
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 0.6rem;
`;

const Label = styled.div`
  flex: 0 0 150px;
  font-weight: 700;
  color: #555;
`;

const Value = styled.div`
  flex: 1;
  color: #222;
`;

const SubTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
`;

const InputField = styled.div`
  flex: 1 1 250px;
  min-width: 250px;
  //display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    outline-color: #007bff;
    border-color: #007bff;
  }
`;

const CheckboxField = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #555;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  transform: scale(1.3);
  margin-right: 0.5rem;
  vertical-align: middle;
`;

const Output = styled.pre`
  margin-top: 1rem;
  padding: 1rem;
  background: #e9f5ff;
  border: 1px solid #007bff;
  border-radius: 4px;
  font-family: monospace;
  white-space: pre-wrap;
`;
