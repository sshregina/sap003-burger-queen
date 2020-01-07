import React from 'react';
import Exemplo from '.';

export default {
    component: Exemplo,
    title: 'Page/Exemplo',
};

export const semProp = () => <Exemplo/>;

export const comProp = () => <Exemplo onClick={() => alert("adfasdf")} />;
