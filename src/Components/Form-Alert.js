import React from 'react';
import {useEffect, useState} from 'react'
import {Alert, Spin, Space} from 'antd'

const AlertMessage = ({type, message, showAlert, loading}) => {
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        if(showAlert) {
            setDisplay(true);
            setTimeout(() => {
                setDisplay(false)
            }, 2000)
        }
    }, [showAlert])

    const renderComponent = () => {
        if(display){
            return <Alert message={message} type={type} />
        } else if(loading){
            return (
                <Space size='small'>
                    <Spin/>
                </Space>
            )
        } else return null
    }
    return renderComponent()
}
 export default AlertMessage