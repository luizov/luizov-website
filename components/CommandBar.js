import {
    KBarAnimator,
    KBarProvider,
    KBarPortal,
    useDeepMatches,
    KBarPositioner,
    KBarSearch,
    KBarResults,
} from 'kbar';

export default function CommandBard({ children }) {
    return (
        <KBarProvider actions={actions}>
            <KBarPortal>
                <Positioner>
                    <Animator>
                        <Search placeholder="Type a command or search…" />
                        <RenderResults />
                    </Animator>
                </Positioner>
            </KBarPortal>

            {props.children}
        </KBarProvider>
    )
}