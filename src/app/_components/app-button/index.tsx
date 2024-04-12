import React, {FC} from 'react';

type IButtonApp = {
    text: string,
    disabled?: boolean
}
const ButtonApp: FC<IButtonApp> = ({text, disabled}) => {
    return (
        <button disabled={disabled} type={"submit"} className={'w-max text-sm px-8 py-3 rounded-[10px] transition duration-500 active:bg-mainbg' +
            ' max-phone:text-sm ' + (disabled ? 'bg-grey-3 text-black cursor-default border border-grey-stroke' :  'text-white bg-main hover:shadow-[0_4px_16px_0_rgba(151,0,0,0.35)] cursor-pointer')}>
            {text}
        </button>
    );
};

export default ButtonApp;