import type { PropsWithChildren } from 'react';
export default function DefaultLayout({ children }: PropsWithChildren) {
    return (
        <div>
            {children}
        </div>
    )
}