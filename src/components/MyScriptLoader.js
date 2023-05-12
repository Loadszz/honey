import React from 'react'
import { useEffect } from 'react';
export default function MyScriptLoader() {

	useEffect(() => {
		const loadScript = async () => {
			const script = await import('/public/js/libs/dynamic_adapt.js');
			// const script1 = await import('/public/js/files/functions.js');
		};

		if (typeof window !== 'undefined') {
			loadScript();
		}
	}, []);

	return null;
}
