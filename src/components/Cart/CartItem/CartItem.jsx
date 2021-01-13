import React from 'react'
import {Typography, Button, Card, CardActions, CardMedia, CardContent} from '@material-ui/core'
import useSyles from './styles'
import {useAuth} from '../../../contexts/AuthContext'
const CartItem = ({item}) => {

    const {handleRemoveFromCart, handleUpdateCartQty} = useAuth()
    const classes = useSyles()
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h4'> {item.name}</Typography>
                <Typography variant='h5'> {item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)} >+</Button>
                </div>
                <Button variant='contained' type='button ' color='secondary' onClick={ () => handleRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem