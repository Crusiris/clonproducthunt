import Head from 'next/head';
import style from '@emotion/styled';

const Heading = style.h1`
color:red;
`;

export default function Home() {
  return (
    <Heading>Hi word</Heading>
  );
}
