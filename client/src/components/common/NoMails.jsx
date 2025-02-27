import { Box, Typography, styled, Divider } from '@mui/material';

const Component = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    opacity: 0.8,
});

const StyledDivider = styled(Divider)({
    width: '100%',
    marginTop: 10,
});

const NoMails = ({ message }) => {
    return (
        <Component>
            {message && message.heading && (
                <Typography>{message.heading}</Typography>
            )}
            {message && message.subHeading && (
                <Typography>{message.subHeading}</Typography>
            )}
            <StyledDivider />
        </Component>
    );
};

export default NoMails;
