import { useForm } from "react-hook-form";
import { TextField } from "../../Forms/TextField/TextField";
import { emailPattern } from "../../Forms/utils/validation";
import { useNavigate } from "react-router-dom";
import { FormError } from "../../Forms/FormError/FormError";
import CustomButton from "../../CustomButton/CustomButton";
import "../../Forms/form.css";
import Checkbox from "../../Forms/Checkbox/Checkbox";

export function RegistrationPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);
    navigate('/')
  }

  function doThePasswordsMatch() {
    return watch("password1") === watch("password2");
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
          validate: doThePasswordsMatch,
        })}
        hasError={errors.password1 ? true : false}
      />

      {errors.password1 && errors.password1.type === "required" && (
        <FormError>Password is required</FormError>
      )}

      {errors.password1 && errors.password1.type === "minLength" && (
        <FormError>Password can't be less than 5 symbols</FormError>
      )}

      <TextField
        title="Repeat Password"
        password
        register={register("password2", {
          required: true,
          minLength: 5,
          validate: doThePasswordsMatch,
        })}
        hasError={errors.password2 ? true : false}
      />

      {errors.password2 && errors.password2.type === "validate" && (
        <FormError>Passwords don't match</FormError>
      )}

      <Checkbox title="Remember Me" register={register("rememberUser")} />

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
