import { Button, Input, Modal, Spacer, Text } from '@nextui-org/react'

const ModalAddOutlet = ({ close, visible, save }) => {
    return (
        <>
            <Modal width='35%' open={visible} closeButton onClose={close} aria-labelledby="modal-add-member" css={{ fontFamily: "poppins" }}>
                <Modal.Header>
                    <Text id="modal-title" size={24} css={{ fontFamily: "poppins" }}>
                        Add New
                    </Text>
                    <Spacer x={0.35} />
                    <Text b size={24} color="secondary">
                        Outlet
                    </Text>

                </Modal.Header>
                <Modal.Body>
                    <Input labelLeft="Outlet" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                    <Spacer />
                    <Input labelLeft="Address" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                    <Spacer />
                    <Input labelLeft="Phone" type="text" clearable fullWidth color='primary' size='lg' placeholder='type here...' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onPress={save} color="secondary">Save The Data</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddOutlet