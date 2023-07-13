import { TextField } from "../../Forms/TextField/TextField";
import CustomButton from "../../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { FormError } from "../../Forms/FormError/FormError";
import { useForm } from "react-hook-form";
import "../../Forms/form.css";
import { emailPattern } from "../../Forms/utils/validation";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const { loginUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function onSubmit({ email, password }) {
    if (!(await loginUser(email, password))) {
      setError("email", {
        type: "invalidCreditials",
        message: "Email or password is invalid",
      });

      return;
    }

    navigate("/");
  }

  function onErrors(errors) {
    console.log({ errors });
  }

  return (
    <form
      className="form form_login authorization-interact__form_login"
      onSubmit={handleSubmit(onSubmit, onErrors)}
    >
      <TextField
        title="Email Address"
        register={register("email", {
          required: true,
          pattern: emailPattern,
        })}
        hasError={errors.email ? true : false}
      />

      {errors.email && errors.email.type === "required" && (
        <FormError>Email is required</FormError>
      )}

      {errors.email && errors.email.type === "invalidCreditials" && (
        <FormError>Email or password is invalid</FormError>
      )}

      {errors.email && errors.email.type === "pattern" && (
        <FormError>Email is not valid</FormError>
      )}

      <TextField
        title="Password"
        password
        register={register("password", {
          required: true,
          minLength: 5,
        })}
        hasError={errors.password ? true : false}
      />

      {errors.password && errors.password.type === "required" && (
        <FormError>Password is required</FormError>
      )}

      {errors.password && errors.password.type === "minLength" && (
        <FormError>Password can't be less than 5 symbols</FormError>
      )}

      {/* <Checkbox title="Remember Me" register={register("rememberUser")} /> */}

      <div className="form__buttons">
        <CustomButton color="red" shadows blockName="form" submit>
          Login
        </CustomButton>

        <CustomButton
          color="white"
          shadows
          blockName="form"
          type="button"
          onClick={() => navigate("/registration")}
        >
          Signup
        </CustomButton>
      </div>
    </form>
  );
}
