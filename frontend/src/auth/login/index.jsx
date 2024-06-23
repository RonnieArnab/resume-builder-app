import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

export function Login() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    loginError: false,
    message: "",
  });

  const [loginLoader, setLoginLoader] = useState(false);
  const [googleLoader, setGoogleLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLoginDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSwitchChange = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    setGoogleLoader(true);

    setTimeout(() => {
      setGoogleLoader(false);
    }, 5000);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLoginLoader(true);

    // Simulate login logic here
    setTimeout(() => {
      setLoginLoader(false);
    }, 5000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[450px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Please enter your email below to log in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1">
            <Button
              className="w-full mb-3"
              onClick={handleGoogleLogin}
              disabled={googleLoader}>
              {googleLoader ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </>
              ) : (
                "Google"
              )}
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={loginDetails.email}
              onChange={handleInputChange}
              placeholder="m@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={loginDetails.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-end space-x-2">
            <Switch
              id="showPassword"
              checked={showPassword}
              onCheckedChange={handleSwitchChange}
            />
            <Label htmlFor="showPassword">Show Password</Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            className="w-full mb-3"
            onClick={handleLogin}
            disabled={loginLoader}>
            {loginLoader ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </>
            ) : (
              "Login"
            )}
          </Button>
          <div>
            Don't have an account?&nbsp;
            <Link to={"/auth/sign-in"}>
              <Button variant="link">Register</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
