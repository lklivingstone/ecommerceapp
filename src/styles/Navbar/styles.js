import { alpha, makeStyle, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    title : {
        display: 'none',
        [theme.breakpoints.up('sm')] : {
            display: 'block',
        },
    },

    search : {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        '&:hover': { 
            backgroundColor: alpha(theme.palette.common.white, 0.25) 
        },
        // marginRight: theme.spacing(2),
        // marginLeft: 0,
        width: '100%',
        // [theme.breakpoints.up('sm')] : {
        //     marginLeft: theme.spacing(0), 
        //     width: 'auto'
        // },
    },

    searchIcon : {
        padding: theme.spacing(0, 2), 
        height: '100%', 
        position: 'absolute', 
        pointerEvents: 'none', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
    },

    inputRoot : {
        color: 'inherit',
    },

    inputInput : {
        // padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')] : {
            width: '20ch'
        },
    },

    shoppingCartIcon : {
        marginLeft: 10,
        // height: '100%', 
        // position: 'absolute', 
        // // pointerEvents: 'none', 
        // display: 'flex', 
        // alignItems: 'center', 
        // justifyContent: 'center',
    },

    marginBetween : {
        marginRight: 10
    },

    rightItems : {
        display: 'flex',
        alignItems: 'center'
    },

    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    displayFlex : {
        display: 'flex'
    },
    flexone : {
        flex: 1
    }
}));