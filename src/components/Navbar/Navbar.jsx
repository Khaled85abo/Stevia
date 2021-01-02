import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography, Icon} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/iconpng.png'
import {Link, useLocation} from 'react-router-dom'

import useStyles from './styles'

const Navbar = ({totalItems}) => {

    const classes = useStyles()
    const location = useLocation()

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='commerce.js' height='25px' className={classes.image} />
                        Stevia For Healthy Life
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' &&   (
                         <div className={classes.button}>
                         <IconButton component={Link} to='/cart' aria-label='show cart item' color='inherit' >
                             <Badge badgeContent={totalItems}  color='secondary'>
                                 <ShoppingCart />
                             </Badge>
                         </IconButton>
                     </div>
                    )}
                   
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
