'use client'
export const ItensStyles = {
    container: {
        backgroundColor: '#FCF6F6',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const, // Definindo como constante para evitar a incompatibilidade de tipo
    },
    arrowsContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
    },
        title: {
        color: '#9B1127',
        fontSize: '32px',
        fontFamily: 'Red Hat Display, sans-serif',
        fontWeight: 'bold',
        },
    
    categoriesContainer: {
        display: 'flex',
        flexDirection: 'row' as const,
        alignItems: 'center',
        padding: '20px',
        justifyContent: 'space-between',
        },
    sliderContainer: {
        width: '100%',
    },
    inputContainer: {
      backgroundColor: '#FFFFFF',
      width: '830px',
      height: '650px',
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)',
      display: 'flex',
      margin: '20px',
      flexDirection: 'column' as const,
      justifyContent: 'space-around',
    },
    inputBox: {
      backgroundColor: '#F2F2F2', 
      padding: '8px', 
      borderRadius: '4px',
      outline: 'none',
    },
    inputItens: {
      display: "flex",
      alignItems: "center",
      gap: "2%",
      marginRight: "3%",
      marginTop: "3%",
    },
    categoytStyle: {
      color: '#000',
      fontSize: '28px',
      padding: '0 25px',
      fontFamily: 'Red Hat Display, sans-serif',
      fontWeight: 'medium',
  },    
  extra: {
    color: '#000',
    fontSize: '28px',
    padding: '0 25px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'semi-bold',
},
    infosStyle: {
    color: '#000',
    fontSize: '28px',
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: 'semibold',
    padding: '10px',
},
    itensName: {
        color: '#000',
        fontSize: '24px',
        padding:'10px',
        fontFamily: 'Red Hat Display, sans-serif',
        fontWeight: 'medium',
        textAlign: 'center' as const
    },
    itensContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row' as const,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        cursor: 'pointer'
    },

    confirmPopup: {

      top: '0',
      left: '0',
      width: '100%',
      height: '100%',

      display: 'flex',
    textAlign: 'center' as const,
      justifyContent: 'center'
    },
    confirmPopupInner: {
        position: 'fixed' as const,
    top: '50%', /* Mantém o pop-up no meio verticalmente */
    left: '50%', /* Mantém o pop-up no meio horizontalmente */
    transform: 'translate(-50%, -50%)', /* Centraliza o pop-up na tela */
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
      textAlign: 'center' as const
    },
    confirmButton: {
      backgroundColor: 'black',
      color: 'white',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '10px'
    },

  };