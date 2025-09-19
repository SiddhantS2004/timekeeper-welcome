import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Clock, Mail, Lock, User, Chrome } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      toast({
        title: "Welcome aboard! 🎉",
        description: "Your account has been created successfully.",
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleSignup = () => {
    toast({
      title: "Coming Soon",
      description: "Google authentication will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-tertiary rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 right-1/2 w-24 h-24 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-rainbow rounded-3xl mb-6 shadow-neon hover:scale-110 transition-bounce cursor-pointer">
              <Clock className="w-10 h-10 text-primary-foreground animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-3">Join Time Tracker</h1>
          <p className="text-lg text-muted-foreground font-medium">Start your productivity journey today ⚡</p>
        </div>

        <Card className="border border-secondary/20 shadow-colorful bg-card/90 backdrop-blur-lg hover:shadow-neon transition-bounce">
          <CardHeader className="space-y-3 text-center pb-6">
            <CardTitle className="text-3xl font-bold bg-gradient-tertiary bg-clip-text text-transparent">Create Account</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Get started with your free account 🌟
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </Label>
                <div className="relative group">
                  <User className="absolute left-3 top-3 h-5 w-5 text-primary group-focus-within:text-tertiary transition-smooth z-10" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-12 h-14 border-2 border-primary/30 bg-gradient-glow focus:border-tertiary focus:shadow-glass hover:border-secondary/50 transition-bounce text-base rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
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
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-primary group-focus-within:text-secondary transition-smooth z-10" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 h-14 border-2 border-primary/30 bg-gradient-glow focus:border-secondary focus:shadow-glass hover:border-tertiary/50 transition-bounce text-base rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                  Confirm Password
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-primary group-focus-within:text-tertiary transition-smooth z-10" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-12 h-14 border-2 border-primary/30 bg-gradient-glow focus:border-tertiary focus:shadow-glass hover:border-secondary/50 transition-bounce text-base rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2 text-sm">
                <input type="checkbox" className="rounded border-border mt-1" required />
                <span className="text-muted-foreground leading-relaxed">
                  I agree to the{" "}
                  <button type="button" className="text-primary hover:text-secondary transition-smooth font-medium">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button type="button" className="text-primary hover:text-secondary transition-smooth font-medium">
                    Privacy Policy
                  </button>
                </span>
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-semibold rounded-xl"
                disabled={isLoading}
                variant="secondary"
              >
                {isLoading ? "✨ Creating Account..." : "🎯 Create Account"}
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
              onClick={handleGoogleSignup}
              className="w-full h-14 text-lg font-semibold rounded-xl"
            >
              <Chrome className="w-6 h-6 mr-3" />
              🔗 Sign up with Google
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/" className="text-primary hover:text-secondary font-medium transition-smooth">
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By creating an account, you agree to our{" "}
          <button className="text-primary hover:text-secondary transition-smooth">
            Terms of Service
          </button>{" "}
          and{" "}
          <button className="text-primary hover:text-secondary transition-smooth">
            Privacy Policy
          </button>
        </p>
      </div>
    </div>
  );
}