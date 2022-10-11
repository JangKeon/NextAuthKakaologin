import { useSession, signIn, signOut } from "next-auth/react"

export default function LogInPage() {
    const { data: session } = useSession()
    console.log(session);
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>
                <img src = "/images/kakao_login_medium_narrow.png"></img>
            </button>
        </>
    )
}
