import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { CssBaseline } from '@material-ui/core';

addDecorator(story => (
    <>
        <CssBaseline />
        {story()}
    </>
));

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
