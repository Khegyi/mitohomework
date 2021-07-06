import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const About = () => {
  const router = useRouter()
  const {
    query: { id },
  } = router
    return (
    <div>
      <h1>Hello About</h1>
      <Link href="/home">
            <a>home - {id}</a>
          </Link>
         
    </div>
    );
  };
  
  export default About;
  