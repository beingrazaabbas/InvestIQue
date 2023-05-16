import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Navbar from './Navbar'; // Make sure the path is correct
import styles from './Profile.module.scss';

const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    const userData = {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        age: 25
    };

    const recommendedStocks = [
        { name: 'Stock A', price: '100' },
        { name: 'Stock B', price: '200' },
        { name: 'Stock C', price: '150' },
    ];

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.userInfo}>
                    <h2>User Info</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Age: {userData.age}</p>
                </div>

                <div className={styles.recommendedStocks}>
                    <h2>Recommended Stocks</h2>
                    {recommendedStocks.map((stock, index) => (
                        <p key={index}>
                            {stock.name} - {stock.price}
                        </p>
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <Button type="primary" onClick={handleOpenModal}>
                        Open Modal
                    </Button>
                </div>

                <Modal
                    title="Welcome!"
                    visible={showModal}
                    onCancel={handleCloseModal}
                    footer={[
                        <Button key="close" onClick={handleCloseModal}>
                            Close
                        </Button>
                    ]}
                >
                    <p>
                        Thank you for visiting your profile page. Here, you can view your user information and check out the recommended stocks for you.
                    </p>
                </Modal>
            </div>
        </div>
    );
};

export default Profile;
