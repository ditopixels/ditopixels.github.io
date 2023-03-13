import { Suspense } from 'react'

const Loadable = (Component:React.LazyExoticComponent<() => JSX.Element>) => (props:any) =>
    (
        <Suspense>
            <Component {...props} />
        </Suspense>
    );

export default Loadable