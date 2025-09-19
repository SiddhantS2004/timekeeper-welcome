import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Clock, Mail, Lock, Chrome } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleLogin = () => {
    toast({
      title: "Coming Soon",
      description: "Google authentication will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-secondary rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 left-1/2 w-24 h-24 bg-gradient-tertiary rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-rainbow rounded-3xl mb-6 shadow-neon hover:scale-110 transition-bounce cursor-pointer">
            <Clock className="w-10 h-10 text-primary-foreground animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">Time Tracker</h1>
          <p className="text-lg text-muted-foreground font-medium">Track your productivity with precision ✨</p>
        </div>

        <Card className="border border-primary/20 shadow-colorful bg-card/90 backdrop-blur-lg hover:shadow-neon transition-bounce">
          <CardHeader className="space-y-3 text-center pb-6">
            <CardTitle className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">Welcome back</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Sign in to your account to continue tracking 🚀
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email address
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-primary group-focus-within:text-secondary transition-smooth z-10" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 border-2 border-primary/30 bg-gradient-glow focus:border-primary focus:shadow-glass hover:border-secondary/50 transition-bounce text-base rounded-xl"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-primary group-focus-within:text-secondary transition-smooth z-10" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 h-14 border-2 border-primary/30 bg-gradient-glow focus:border-primary focus:shadow-glass hover:border-secondary/50 transition-bounce text-base rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <button type="button" className="text-primary hover:text-primary/80 transition-smooth">
                  Forgot password?
                </button>
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-semibold rounded-xl"
                disabled={isLoading}
                variant="rainbow"
              >
                {isLoading ? "✨ Signing in..." : "🚀 Sign in"}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-border/50" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Button
              variant="google"
              onClick={handleGoogleLogin}
              className="w-full h-14 text-lg font-semibold rounded-xl"
            >
              <Chrome className="w-6 h-6 mr-3" />
              🔗 Continue with Google
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button className="text-primary hover:text-primary/80 font-medium transition-smooth">
                Sign up
              </button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing in, you agree to our{" "}
          <button className="text-primary hover:text-primary/80 transition-smooth">
            Terms of Service
          </button>{" "}
          and{" "}
          <button className="text-primary hover:text-primary/80 transition-smooth">
            Privacy Policy
          </button>
        </p>
      </div>
    </div>
  );
}