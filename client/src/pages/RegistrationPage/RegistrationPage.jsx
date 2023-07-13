import { Form, useForm } from "react-hook-form";
import { TextField } from "../../Forms/TextField/TextField";
import { emailPattern } from "../../Forms/utils/validation";
import { useNavigate } from "react-router-dom";
import { FormError } from "../../Forms/FormError/FormError";
import CustomButton from "../../CustomButton/CustomButton";
import "../../Forms/form.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();
  const { registrateUser } = useContext(UserContext);

  async function onSubmit({ email, password1, password2, name }) {
    if (password1 !== password2) {
      let error = {
        type: "passwordsDoNotMatch",
        message: "Passwords don't match",
      };

      setError("password1", error);
      setError("password2", error);

      return;
    }

    if (!(await registrateUser(email, password1, name))) {
      setError("email", {
        type: "userWithThisEmailIsAlreadyExist",
        message: "User with this email is already exist",
      });

      return;
    }

    navigate("/");
  }

  return (
    <form
      className="form form_registration authorization-interact__form_registration"
      onSubmit={handleSubmit(onSubmit)}
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

      {errors.email && errors.email.type === "pattern" && (
        <FormError>Email is not valid</FormError>
      )}

      {errors.email &&
        errors.email.type === "userWithThisEmailIsAlreadyExist" && (
          <FormError>User with this email is already exist</FormError>
        )}

      <TextField
        title="Name"
        register={register("name", {
          required: true,
        })}
        hasError={errors.name ? true : false}
      />

      {errors.name && errors.name.type === "required" && (
        <FormError>Name is required</FormError>
      )}

      <TextField
        title="Password"
        password
        register={register("password1", {
          required: true,
          minLength: 5,
        })}
        hasError={errors.password1 ? true : false}
      />

      {errors.password1 && errors.password1.type === "required" && (
        <FormError>Password is required</FormError>
      )}

      {errors.password1 && errors.password1.type === "minLength" && (
        <FormError>Password can't be less than 5 symbols</FormError>
      )}

      {errors.password1 && errors.password1.type === "passwordsDoNotMatch" && (
        <FormError>Passwords don't match</FormError>
      )}

      <TextField
        title="Repeat Password"
        password
        register={register("password2", {
          required: true,
          minLength: 5,
        })}
        hasError={errors.password2 ? true : false}
      />

      {errors.password2 && errors.password2.type === "passwordsDoNotMatch" && (
        <FormError>Passwords don't match</FormError>
      )}

      <div className="form__buttons">
        <CustomButton color="red" shadows blockName="form" submit>
          Registrate
        </CustomButton>

        <CustomButton
          color="white"
          shadows
          blockName="form"
          type="button"
          onClick={() => navigate("/login")}
        >
          Login
        </CustomButton>
      </div>
    </form>
  );
}
