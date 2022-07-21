import { Input as NativeBaseInput, IInputProps } from 'native-base';

//...rest pega qualquer prop a mais que eu passar no component
export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      selectionColor="white"
      // _ = Pseudos propriedades
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700"
      }}
      {...rest}
    />
  );
}