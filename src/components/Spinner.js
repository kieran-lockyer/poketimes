import React from 'react'
import { ClipLoader } from 'react-spinners'
import { css } from '@emotion/core'

const Spinner = () => {
    return ( 
        <ClipLoader css={css``} sizeUnit={"px"} size={150} color={'red'} loading={true} />
     );
}
 
export default Spinner;