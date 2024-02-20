import { KeepBoolean, KeepColors, KeepSizes, KeepStateColors } from '../../Keep/KeepTheme'

export interface keepFormControlTheme {
  helperText: {
    base: string
    disabled: string
    colors: HelperColors
  }
  label: {
    base: string
    colors: LabelColors
    disabled: string
  }
  radio: keepRadioTheme
  numberInput: keepNumberInputTheme
  textInput: keepTextInputTheme
  fileInput: {
    base: string
    field: {
      base: string
      input: {
        base: string
        sizes: TextInputSizes
        colors: TextInputColors
      }
    }
  }
  textarea: keepTextAreaTheme
}

export interface HelperColors extends Pick<KeepColors, 'gray' | 'info' | 'error' | 'warning' | 'success'> {
  [key: string]: string
}

export interface LabelColors extends KeepStateColors {
  [key: string]: string
  default: string
}

export interface keepNumberInputTheme {
  base: string
  field: {
    base: string
    icon: {
      base: string
      incrementIcon: string
      decrementIcon: string
      disabled: string
      sizes: NumberInputSizes
      position: {
        right: string
        incrementIcon: string
        decrementIcon: string
      }
    }
    input: {
      base: string
      disabled: string
      sizes: NumberInputSizes
      withIcon: {
        on: {
          left: string
          right: string
        }
        off: string
      }
    }
  }
}

export interface NumberInputSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export interface keepRadioTheme {
  base: string
  radioInput: string
  color: KeepStateColors
  radioType: {
    base: string
    square: string
    circle: string
  }
  sizes: RadioInputSizes
}

export interface RadioInputSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export interface keepTextAreaTheme {
  base: string
  colors: TextareaColors
  disabled: string
  withBg: {
    on: {
      colors: TextareaColors
    }
    off: string
  }
  withBorder: KeepBoolean
  withShadow: KeepBoolean
}

export interface TextareaColors extends Pick<KeepColors, 'gray' | 'info' | 'error' | 'warning' | 'success'> {
  [key: string]: string
}

export interface keepTextInputTheme {
  base: string
  addon: {
    base: string
    separator: {
      colors: TextInputColors
    }
    position: {
      left: string
      right: string
    }
    addonBorder: {
      on: string
      off: string
    }
  }
  field: {
    base: string
    icon: {
      base: string
      position: {
        left: string
        right: string
      }
    }
    input: {
      base: string
      disabled: string
      sizes: TextInputSizes
      colors: TextInputColors
      withBorder: KeepBoolean
      withBg: {
        on: {
          colors: TextInputColors
        }
        off: string
      }
      withIcon: {
        on: {
          left: string
          right: string
        }
        off: string
      }
      withAddon: {
        on: {
          left: string
          right: string
        }
        off: string
      }
      withShadow: KeepBoolean
    }
  }
}

export interface TextInputColors extends Pick<KeepColors, 'gray' | 'info' | 'error' | 'warning' | 'success'> {
  [key: string]: string
}

export interface TextInputSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export const formControlsTheme: keepFormControlTheme = {
  helperText: {
    base: 'mt-2 text-body-5',
    disabled: 'cursor-not-allowed opacity-50',
    colors: {
      default: 'text-metal-500',
      gray: 'text-metal-500',
      info: 'text-primary-700',
      success: 'text-green-600',
      error: 'text-red-600',
      warning: 'text-yellow-500',
    },
  },
  label: {
    base: 'text-body-5 font-medium cursor-pointer select-none',
    colors: {
      default: 'text-metal-700',
      gray: 'text-metal-700',
      info: 'text-primary-500',
      error: 'text-red-600',
      warning: 'text-yellow-500',
      success: 'text-green-700',
    },
    disabled: 'opacity-50 cursor-not-allowed select-none',
  },
  radio: {
    color: {
      info: 'peer-checked:border-primary-500 peer-checked:before:bg-primary-500 border-metal-200',
      warning: 'peer-checked:border-warning-500 peer-checked:before:bg-warning-500 border-warning-500',
      success: 'peer-checked:border-success-500 peer-checked:before:bg-success-600 border-success-500',
      error: 'peer-checked:border-error-500 peer-checked:before:bg-error-500 border-error-500',
    },
    base: 'border',
    radioType: {
      base: 'flex items-center justify-center relative duration-300 transition-all cursor-pointer pointer-events-none',
      square: 'rounded before:rounded-sm',
      circle: 'rounded-full before:rounded-full',
    },
    radioInput: 'opacity-0 peer absolute cursor-pointer mx-auto',
    sizes: {
      sm: 'h-4 w-4 before:absolute before:h-2 before:w-2',
      md: 'h-5 w-5 before:absolute before:h-2.5 before:w-2.5',
      lg: 'h-6 w-6 before:absolute before:h-3 before:w-3',
    },
  },
  numberInput: {
    base: 'flex',
    field: {
      base: 'relative',
      icon: {
        base: 'absolute bg-metal-25 cursor-pointer rounded-md top-2/4 -translate-y-2/4',
        incrementIcon: 'h-full flex items-center justify-center',
        decrementIcon: 'h-full flex items-center justify-center',
        disabled: '!cursor-not-allowed opacity-50',
        sizes: {
          sm: 'w-5 h-5',
          md: 'w-6 h-6',
          lg: 'w-7 h-7',
        },
        position: {
          right: '',
          incrementIcon: 'right-2',
          decrementIcon: 'left-2 ',
        },
      },
      input: {
        base: 'block text-center border border-metal-200 rounded-md text-metal-600 focus:outline-none focus:ring-0 focus:border-metal-500',
        disabled: 'cursor-not-allowed opacity-50',
        sizes: {
          sm: 'max-w-[120px] py-2 px-8 sm:text-body-5',
          md: 'max-w-[134px] py-2.5 px-10 text-body-5',
          lg: 'max-w-[140px] py-3 px-12 sm:',
        },
        withIcon: {
          on: {
            left: '',
            right: '',
          },
          off: '',
        },
      },
    },
  },
  textInput: {
    base: 'flex',
    addon: {
      base: 'relative inline-flex items-center px-3 text-body-5 after:content[""] after:absolute after:h-2/4 after:w-px after:top-2/4 after:-translate-y-2/4',
      separator: {
        colors: {
          default: 'text-metal-800 border-metal-300 after:bg-metal-200',
          gray: 'text-metal-800 border-metal-300 after:bg-metal-200',
          info: 'text-primary-500 border-primary-300 after:bg-primary-200',
          error: 'text-error-600 border-error-200 after:bg-error-200',
          warning: 'text-warning-500 border-warning-200 after:bg-warning-200',
          success: 'text-success-500 border-success-200 after:bg-success-200',
        },
      },
      position: {
        left: 'border-r-0 after:right-0',
        right: 'border-l-0 after:left-0',
      },

      addonBorder: {
        on: 'border-l border-t border-b rounded-l',
        off: 'border-b',
      },
    },
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 flex items-center',
        position: {
          left: 'left-0 pl-3',
          right: 'right-0 pr-3',
        },
      },
      input: {
        base: 'block w-full focus:outline-none focus:ring-0',
        disabled: 'cursor-not-allowed opacity-50',
        sizes: {
          sm: 'p-2 sm:text-body-5',
          md: 'p-2.5 text-body-5',
          lg: 'sm: p-4',
        },
        colors: {
          default: 'text-metal-800 border-metal-300 caret-metal-800',
          gray: 'text-metal-800 border-metal-300 caret-metal-800',
          info: 'text-primary-500 border-primary-300 caret-primary-600',
          error: 'text-error-600 border-error-200 caret-error-500',
          warning: 'text-warning-500 border-warning-200 caret-warning-500',
          success: 'text-success-500 border-success-200 caret-success-600',
        },
        withBg: {
          on: {
            colors: {
              default: 'bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300',
              gray: 'bg-metal-25 placeholder:text-metal-400 focus:placeholder:text-metal-300',
              info: 'bg-primary-25 placeholder:text-primary-400 focus:placeholder:text-primary-300',
              error: 'bg-error-25 placeholder:text-error-400 focus:placeholder:text-error-300',
              warning: 'bg-warning-25 placeholder:text-warning-400 focus:placeholder:text-warning-300',
              success: 'bg-success-25 placeholder:text-success-400 focus:placeholder:text-success-300',
            },
          },
          off: 'bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300',
        },
        withBorder: {
          on: 'border',
          off: 'border-b !rounded-r-0',
        },

        withIcon: {
          on: {
            left: 'pl-10',
            right: 'pr-10',
          },
          off: '',
        },
        withAddon: {
          on: {
            left: 'border-l-0 rounded-r-md',
            right: 'border-r-0 rounded-l-md',
          },
          off: 'rounded-md',
        },
        withShadow: {
          on: 'shadow-small',
          off: '',
        },
      },
    },
  },
  fileInput: {
    base: 'flex',
    field: {
      base: 'relative w-full',
      input: {
        base: 'rounded-lg block w-full border disabled:cursor-not-allowed disabled:opacity-50',
        sizes: {
          sm: 'sm:text-body-5',
          md: 'text-body-5',
          lg: 'sm:',
        },
        colors: {
          gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500',
          info: 'border-blue-500 bg-primary-50 text-primary-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500',
          error: 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500',
          warning:
            'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500',
          success:
            'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500',
        },
      },
    },
  },
  textarea: {
    base: 'appearance-none form-textarea block w-full border-0 focus:outline-none focus:ring-0 p-3',
    disabled: 'disabled:cursor-not-allowed disabled:opacity-50',
    colors: {
      default: 'text-metal-800 border-metal-300 focus:border-metal-500 caret-metal-800',
      gray: 'text-metal-800 border-metal-300 focus:border-metal-500 caret-metal-800',
      info: 'text-primary-500 border-primary-300 focus:border-info-300 caret-primary-600',
      error: 'text-error-600 border-error-200 focus:border-error-300 caret-error-500',
      warning: 'text-warning-500 border-warning-200 focus:border-warning-300 caret-warning-500',
      success: 'text-success-500 border-success-200 focus:border-success-300 caret-success-600',
    },
    withBg: {
      on: {
        colors: {
          default: 'bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300',
          gray: 'bg-metal-25 placeholder:text-metal-400 focus:placeholder:text-metal-300',
          info: 'bg-primary-25 placeholder:text-primary-400 focus:placeholder:text-primary-300',
          error: 'bg-error-25 placeholder:text-error-400 focus:placeholder:text-error-300',
          warning: 'bg-warning-25 placeholder:text-warning-400 focus:placeholder:text-warning-300',
          success: 'bg-success-25 placeholder:text-success-400 focus:placeholder:text-success-300',
        },
      },
      off: 'bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300',
    },
    withBorder: {
      on: '!border rounded-md',
      off: '!border-b rounded-none',
    },
    withShadow: {
      on: 'shadow-small',
      off: '',
    },
  },
}
