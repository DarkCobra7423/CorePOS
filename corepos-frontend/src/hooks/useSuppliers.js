import { useEffect, useState } from 'react';
import { getListSupplier } from '../services/shoppingService';

export default function useSuppliers() {
    const [suppliers, setSuppliers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const data = await getListSupplier();
                const mapped = data.map(item => ({
                    id: item.idSuplier,
                    name: item.name,
                    email: item.email,
                    contactName: item.contactName,
                    phone: item.phone,
                    address: `${item.address.street} ${item.address.zipCode} ${item.address.state} ${item.address.city}`,
                    addressDetails: { // objeto con dirección desglosada
                        street: item.address.street,
                        zipCode: item.address.zipCode,
                        state: item.address.state,
                        city: item.address.city,
                    },
                    rfc: item.rfc,
                    isActive: item.active,
                    createdAt: item.createdAt,
                }));
                setSuppliers(mapped);

            } catch (err) {
                setError(err);
                console.error('Error fetching suppliers:', err);
            }
        };

        fetchSuppliers();
    }, []);

    return { suppliers, error };
}