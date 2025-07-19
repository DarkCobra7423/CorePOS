import react from 'react';
import OrdersPanel from '../components/OrdersPanel';

import SupplierForm from '../components/SupplierForm';

export default function Test() {

    const supplier = {
        idSuplier: "SUP-20250524-FAB56",
        name: "AGOMPEL SA DE CV",
        contactName: "Maria Lopez",
        email: "marialopez@gmail.com",
        phone: "986312211",
        rfc: "HHDK223113",
        address: {
            street: "mexico1",
            city: "Mexico",
            state: "Zacatecas",
            zipCode: "89761"
        },
        isActive: true,
        createdAt: "2025-05-24T06:00:00.000Z"
    };

    return (
        <>
            <SupplierForm
                data={supplier}
            />
        </>
    );
}