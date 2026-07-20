import LoginCard from "@/components/login/LoginCard";
import LoginForm from "@/components/login/LoginForm";
import LoginHeader from "@/components/login/LoginHeader";

export default function LoginPage() {
  return (
    <><div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginCard>
        <LoginHeader />
        <LoginForm />
      </LoginCard>
      </div>
    </>
  );
}
