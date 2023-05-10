import { ChildAsFC } from './Child';

const Parent = () => {
    return ( 
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
        I am child
    </ChildAsFC>
    );
};

export default Parent;