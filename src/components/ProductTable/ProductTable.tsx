import { useEffect, useState } from "react"
import { Product } from "../../types/Product"
import { ProductService } from "../../services/ProductService";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from "../../types/ModalType";
import ProductModal from "../ProductModal/ProductModal";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";



const ProductTable = () => {
    //const para inicializar un producto por defecto y evtiar el "undefined"
    const defaultProduct = (): Product => {
        return {
            id: 0,
            title: '',
            price: 0,
            description: '',
            category: '',
            image: '',
        };
    };

    const [product, setProduct] = useState<Product>(defaultProduct);
    //Const para manejar el estado del modal
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    const [title, setTitle] = useState('');

    //logica del modal
    const handleClick = (newTitle: string, prod: Product, modal: ModalType) => {
        setProduct(prod);
        setModalType(modal);
        setTitle(newTitle);
        setShowModal(true);
    };
    //Variable que va a contener los datosa recibidos de la API
    const [products, setProducts] = useState<Product[]>([]);

    //Muestra el componente loader hasta que se reciban los datos de la api
    const [isLoading, setIsLoading] = useState(true);

    //Este hook se va a ejecutar cada vez que se renderice el componente
    useEffect(() => {

        const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };

        fetchProducts();
    }, [])

    return (
        <div>
            <Button onClick={() => handleClick("Nuevo Producto", defaultProduct(), ModalType.CREATE)}>Nuevo Producto</Button>
            {isLoading ? <Loader /> : (
                <Table hover>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Precio</th>
                            <th>Descripcion</th>
                            <th>Categoria</th>
                            <th>Imagen</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td><img src={product.image} alt={product.title}
                                    style={{ width: '50px' }} /></td>
                                <td><EditButton onClick={()=> handleClick('Editar producto', product, ModalType.UPDATE)}/> </td>
                                <td><DeleteButton onClick={()=> handleClick('Borrar producto', product, ModalType.DELETE)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {showModal && (
                <ProductModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    title={title}
                    modalType={modalType}
                    product={product}
                />
            )}
        </div>
    )
}

export default ProductTable
