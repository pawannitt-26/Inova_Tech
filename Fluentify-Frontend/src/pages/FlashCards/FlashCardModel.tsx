import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { Card } from '@mantine/core';
import PropTypes from 'prop-types';

function FlashCardModel({ title, text }) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Button style={{background:"#318CE7"}} onClick={open}>Open modal</Button>
            <Modal opened={opened} onClose={close} centered>
                <div>
                    <Card
                        shadow="xs"
                        padding="lg"
                        radius="md"
                        className="w-[400px] h-[500px] cursor-pointer transition-all"
                        withBorder
                    >
                        <h1 className="text-xl font-semibold">{title}</h1>
                        <p className="mt-4">{text}</p>
                        <button
                            className="mt-4 text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md "
                            style={{ position: "relative", top: "70%" }}
                        >
                            Delete
                        </button>
                    </Card>
                </div>
            </Modal>
        </>
    );
}

FlashCardModel.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default FlashCardModel;
