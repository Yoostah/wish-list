import React, {memo} from 'react';

import {FiCheck} from 'react-icons/fi'
import { WishContainer, ProgressContainer, ProgressBar, ProgressIndicator } from './styles';

const Wish = memo(({wish}) => {
    return (
        <WishContainer progress={wish.progress}>
            <strong>{wish.name}</strong>
            <p>
                <div>
                    <strong>Data Prevista: </strong>
                    <span>{wish.date}</span>
                </div>
                
                {wish.progress === 100 && <FiCheck size={20}/>}
            </p>
            <ProgressContainer>
                <ProgressIndicator>
                    <ProgressBar color="red" progress={wish.progress} />
                </ProgressIndicator>
                <strong>( {`${wish.progress}%`} )</strong>
            </ProgressContainer>
        </WishContainer>
    );
})

export default Wish;