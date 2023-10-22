import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { Product } from "../../types/Product";
//Dependencias para validar formularios
import * as Yup from "yup";
import { useFormik } from "formik";
import { ProductService } from "../../services/ProductService";

type ProductModalProps = {
    show: boolean;
    onHide: () => void;
    product: Product;
    modalType: ModalType;
    title: string;
};
const ProductModal = ({ show, onHide, title, modalType, product }: ProductModalProps) => {
    //create - update
    const handleSaveUpdate = async (obj: Product) => {
        try {
            const isNew = product.id === 0;
            if (isNew) {
                //create
                await ProductService.createProduct(obj);
            } else {
                //update
                await ProductService.updateProduct(obj.id, obj);
            }
            onHide();
        } catch (error) {
            console.error(error);
        }
    };

    //Delete
    const handleDelete = async (obj: Product) => {
        try {
            await ProductService.deleteProduct(obj.id);
            onHide();
        } catch (error) {
            console.error(error);
        }
    };
    //yup, validacion de formularios
    const validationSchema = () => {
        return Yup.object().shape({
            id: Yup.number().integer().min(0, "El id debe ser mayor a 0").required("El id es requerido"),
            title: Yup.string().required("El titulo es requerido"),
            price: Yup.number().min(0).required("El precio es requerido"),
            description: Yup.string().required("La descripcion es requerida"),
            category: Yup.string().required("La categoria es requerida"),
            image: Yup.string().required("La imagen es requerida"),
        });
    };

    //Formik, utiliza el esquema de validació para crear un formulario dinámico y que lo bloquee en caso de haber errores

    const formik = useFormik({
        initialValues: product,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Product) => {
            handleSaveUpdate(obj);
        },
    });

    return (
        <>
            {modalType === ModalType.DELETE ? (
                <Modal show={show} onHide={onHide} centered backdrop='static'>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Esta seguro que desea eliminar el producto?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                        <Button variant="danger" type="submit" onClick={() => handleDelete}>Eliminar</Button>
                    </Modal.Footer>
                </Modal>
            ) : (
                <>
                    <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={formik.handleSubmit}>
                            <Modal.Body>


                                <Form.Group controlId="formTitle">
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control type="text" name="title" value={formik.values.title || ''}
                                        onBlur={formik.handleBlur} onChange={formik.handleChange} isInvalid={Boolean(formik.errors.title && formik.touched.title)} />
                                    <Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formPrice">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" name="price" value={formik.values.price || ''}
                                        onBlur={formik.handleBlur} onChange={formik.handleChange} isInvalid={Boolean(formik.errors.price && formik.touched.price)} />
                                    <Form.Control.Feedback type="invalid">{formik.errors.price}</Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group controlId="formDescription">
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control type="text" name="description" value={formik.values.description || ''}
                                        onBlur={formik.handleBlur} onChange={formik.handleChange} isInvalid={Boolean(formik.errors.description && formik.touched.description)} />
                                    <Form.Control.Feedback type="invalid">{formik.errors.description}</Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group controlId="formCategory">
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Control type="text" name="category" value={formik.values.category || ''}
                                        onBlur={formik.handleBlur} onChange={formik.handleChange} isInvalid={Boolean(formik.errors.category && formik.touched.category)} />
                                    <Form.Control.Feedback type="invalid">{formik.errors.category}</Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group controlId="formImage">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control type="text" name="image" value={formik.values.image || ''}
                                        onBlur={formik.handleBlur} onChange={formik.handleChange} isInvalid={Boolean(formik.errors.image && formik.touched.image)} />
                                    <Form.Control.Feedback type="invalid">{formik.errors.image}</Form.Control.Feedback>
                                </Form.Group>

                            </Modal.Body>

                            <Modal.Footer className="mt-4">
                                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                                <Button variant="primary" type="submit" disabled={!formik.isValid}>Guardar</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </>
            )}
        </>
    );
};

export default ProductModal;