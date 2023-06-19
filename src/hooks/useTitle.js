import React, { useEffect } from 'react';


export default function useTitle(title) {

    useEffect(() => {
        document.title = `Cinemate - ${title}`;
      });

  return null
}
