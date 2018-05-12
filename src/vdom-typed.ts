import { HTMLProps, ReactNode, createElement, DOMElement } from 'react'

export const REACT_ELEMENT_TYPE =
  typeof Symbol === 'function' && Symbol.for
    ? Symbol.for('react.element')
    : 0xeac7
export function div(props: HTMLProps<HTMLDivElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLDivElement>, HTMLDivElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('div', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'div',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLDivElement>, HTMLDivElement>
    }
  }
}
export function divC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLDivElement>, HTMLDivElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('div', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'div',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLDivElement>, HTMLDivElement>
  }
}

export function span(props: HTMLProps<HTMLSpanElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLSpanElement>, HTMLSpanElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('span', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'span',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLSpanElement>, HTMLSpanElement>
    }
  }
}
export function spanC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLSpanElement>, HTMLSpanElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('span', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'span',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLSpanElement>, HTMLSpanElement>
  }
}

export function strong(props: HTMLProps<HTMLElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('strong', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'strong',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
    }
  }
}
export function strongC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('strong', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'strong',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
  }
}

export function main(props: HTMLProps<HTMLMainElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLMainElement>, HTMLMainElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('main', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'main',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLMainElement>, HTMLMainElement>
    }
  }
}
export function mainC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLMainElement>, HTMLMainElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('main', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'main',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLMainElement>, HTMLMainElement>
  }
}

export function header(props: HTMLProps<HTMLHeadElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('header', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'header',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
    }
  }
}
export function headerC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('header', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'header',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
  }
}

export function ol(props: HTMLProps<HTMLOListElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLOListElement>, HTMLOListElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('ol', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'ol',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLOListElement>, HTMLOListElement>
    }
  }
}
export function olC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLOListElement>, HTMLOListElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('ol', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'ol',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLOListElement>, HTMLOListElement>
  }
}

export function section(props: HTMLProps<HTMLElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('section', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'section',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
    }
  }
}
export function sectionC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('section', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'section',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
  }
}

export function aside(props: HTMLProps<HTMLElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('aside', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'aside',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
    }
  }
}
export function asideC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('aside', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'aside',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
  }
}

export function em(props: HTMLProps<HTMLElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('em', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'em',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
    }
  }
}
export function emC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('em', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'em',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
  }
}

export function button(props: HTMLProps<HTMLButtonElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLButtonElement>, HTMLButtonElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('button', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'button',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLButtonElement>, HTMLButtonElement>
    }
  }
}
export function buttonC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLButtonElement>, HTMLButtonElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('button', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'button',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLButtonElement>, HTMLButtonElement>
  }
}

export function a(props: HTMLProps<HTMLAnchorElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLAnchorElement>, HTMLAnchorElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('a', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'a',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLAnchorElement>, HTMLAnchorElement>
    }
  }
}
export function aC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLAnchorElement>, HTMLAnchorElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('a', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'a',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLAnchorElement>, HTMLAnchorElement>
  }
}

export function ul(props: HTMLProps<HTMLUListElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLUListElement>, HTMLUListElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('ul', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'ul',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLUListElement>, HTMLUListElement>
    }
  }
}
export function ulC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLUListElement>, HTMLUListElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('ul', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'ul',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLUListElement>, HTMLUListElement>
  }
}

export function li(props: HTMLProps<HTMLLIElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLLIElement>, HTMLLIElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('li', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'li',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLLIElement>, HTMLLIElement>
    }
  }
}
export function liC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLLIElement>, HTMLLIElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('li', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'li',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLLIElement>, HTMLLIElement>
  }
}

export function h1(props: HTMLProps<HTMLHeadElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('h1', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'h1',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
    }
  }
}
export function h1C(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('h1', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'h1',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
  }
}

export function h2(props: HTMLProps<HTMLHeadElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('h2', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'h2',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
    }
  }
}
export function h2C(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('h2', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'h2',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
  }
}

export function h3(props: HTMLProps<HTMLHeadElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('h3', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'h3',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
    }
  }
}
export function h3C(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('h3', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'h3',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
  }
}

export function h4(props: HTMLProps<HTMLHeadElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('h4', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'h4',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
    }
  }
}
export function h4C(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('h4', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'h4',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
  }
}

export function h5(props: HTMLProps<HTMLHeadElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('h5', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'h5',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
    }
  }
}
export function h5C(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('h5', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'h5',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
  }
}

export function h6(props: HTMLProps<HTMLHeadElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('h6', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'h6',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
    }
  }
}
export function h6C(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('h6', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'h6',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLHeadElement>, HTMLHeadElement>
  }
}

export function textarea(props: HTMLProps<HTMLInputElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLInputElement>, HTMLInputElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('textarea', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'textarea',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLInputElement>, HTMLInputElement>
    }
  }
}
export function textareaC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLInputElement>, HTMLInputElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('textarea', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'textarea',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLInputElement>, HTMLInputElement>
  }
}

export function img(
  props: HTMLProps<HTMLImageElement>
): DOMElement<HTMLProps<HTMLImageElement>, HTMLImageElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('img', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'img',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLImageElement>, HTMLImageElement>
  }
}
export function input(
  props: HTMLProps<HTMLInputElement>
): DOMElement<HTMLProps<HTMLInputElement>, HTMLInputElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('input', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'input',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLInputElement>, HTMLInputElement>
  }
}
export function br(
  props: HTMLProps<HTMLBRElement>
): DOMElement<HTMLProps<HTMLBRElement>, HTMLBRElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('br', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'br',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLBRElement>, HTMLBRElement>
  }
}
export function hr(
  props: HTMLProps<HTMLHRElement>
): DOMElement<HTMLProps<HTMLHRElement>, HTMLHRElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('hr', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'hr',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLHRElement>, HTMLHRElement>
  }
}
export function area(
  props: HTMLProps<HTMLAreaElement>
): DOMElement<HTMLProps<HTMLAreaElement>, HTMLAreaElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('area', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'area',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLAreaElement>, HTMLAreaElement>
  }
}
export function base(
  props: HTMLProps<HTMLBaseElement>
): DOMElement<HTMLProps<HTMLBaseElement>, HTMLBaseElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('base', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'base',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLBaseElement>, HTMLBaseElement>
  }
}
export function keygen(
  props: HTMLProps<HTMLElement>
): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('keygen', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'keygen',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
  }
}
export function source(
  props: HTMLProps<HTMLSourceElement>
): DOMElement<HTMLProps<HTMLSourceElement>, HTMLSourceElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('source', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'source',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLSourceElement>, HTMLSourceElement>
  }
}
export function track(
  props: HTMLProps<HTMLTrackElement>
): DOMElement<HTMLProps<HTMLTrackElement>, HTMLTrackElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('track', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'track',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLTrackElement>, HTMLTrackElement>
  }
}
export function col(
  props: HTMLProps<HTMLTableColElement>
): DOMElement<HTMLProps<HTMLTableColElement>, HTMLTableColElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('col', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'col',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLTableColElement>, HTMLTableColElement>
  }
}
export function meta(
  props: HTMLProps<HTMLMetaElement>
): DOMElement<HTMLProps<HTMLMetaElement>, HTMLMetaElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('meta', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'meta',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLMetaElement>, HTMLMetaElement>
  }
}
export function embed(
  props: HTMLProps<HTMLEmbedElement>
): DOMElement<HTMLProps<HTMLEmbedElement>, HTMLEmbedElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('embed', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'embed',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLEmbedElement>, HTMLEmbedElement>
  }
}
export function param(
  props: HTMLProps<HTMLParamElement>
): DOMElement<HTMLProps<HTMLParamElement>, HTMLParamElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('param', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'param',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLParamElement>, HTMLParamElement>
  }
}
export function wbr(
  props: HTMLProps<HTMLElement>
): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('wbr', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'wbr',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
  }
}
export function menuitem(
  props: HTMLProps<HTMLMenuElement>
): DOMElement<HTMLProps<HTMLMenuElement>, HTMLMenuElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('menuitem', props)
  } else {
    let key = null
    let ref = null
    if (props.ref) {
      ref = props.ref
      delete props.ref
    }
    if (props.key) {
      key = '' + props.key
      delete props.key
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'menuitem',
      props,
      key,
      ref
    } as DOMElement<HTMLProps<HTMLMenuElement>, HTMLMenuElement>
  }
}
export function p(props: HTMLProps<HTMLParagraphElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLParagraphElement>, HTMLParagraphElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('p', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'p',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLParagraphElement>, HTMLParagraphElement>
    }
  }
}
export function pC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLParagraphElement>, HTMLParagraphElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('p', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'p',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<
      HTMLProps<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  }
}

export function footer(props: HTMLProps<HTMLElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('footer', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'footer',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
    }
  }
}
export function footerC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('footer', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'footer',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
  }
}

export function nav(props: HTMLProps<HTMLElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('nav', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'nav',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
    }
  }
}
export function navC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('nav', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'nav',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
  }
}

export function caption(props: HTMLProps<HTMLElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('caption', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'caption',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
    }
  }
}
export function captionC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLElement>, HTMLElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('caption', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'caption',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLElement>, HTMLElement>
  }
}

export function table(props: HTMLProps<HTMLTableElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLTableElement>, HTMLTableElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('table', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'table',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLTableElement>, HTMLTableElement>
    }
  }
}
export function tableC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLTableElement>, HTMLTableElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('table', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'table',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLTableElement>, HTMLTableElement>
  }
}

export function tr(props: HTMLProps<HTMLTableRowElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLTableRowElement>, HTMLTableRowElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('tr', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'tr',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLTableRowElement>, HTMLTableRowElement>
    }
  }
}
export function trC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLTableRowElement>, HTMLTableRowElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('tr', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'tr',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLTableRowElement>, HTMLTableRowElement>
  }
}

export function th(props: HTMLProps<HTMLTableHeaderCellElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<
    HTMLProps<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  > {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('th', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'th',
        props,
        key,
        ref
      } as DOMElement<
        HTMLProps<HTMLTableHeaderCellElement>,
        HTMLTableHeaderCellElement
      >
    }
  }
}
export function thC(
  ...children: ReactNode[]
): DOMElement<
  HTMLProps<HTMLTableHeaderCellElement>,
  HTMLTableHeaderCellElement
> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('th', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'th',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<
      HTMLProps<HTMLTableHeaderCellElement>,
      HTMLTableHeaderCellElement
    >
  }
}

export function option(props: HTMLProps<HTMLOptionElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLOptionElement>, HTMLOptionElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('option', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'option',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLOptionElement>, HTMLOptionElement>
    }
  }
}
export function optionC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLOptionElement>, HTMLOptionElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('option', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'option',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLOptionElement>, HTMLOptionElement>
  }
}

export function select(props: HTMLProps<HTMLSelectElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLSelectElement>, HTMLSelectElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('select', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'select',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLSelectElement>, HTMLSelectElement>
    }
  }
}
export function selectC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLSelectElement>, HTMLSelectElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('select', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'select',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLSelectElement>, HTMLSelectElement>
  }
}

export function optgroup(props: HTMLProps<HTMLOptGroupElement>) {
  return function(
    ...children: ReactNode[]
  ): DOMElement<HTMLProps<HTMLOptGroupElement>, HTMLOptGroupElement> {
    if (process.env.NODE_ENV !== 'production') {
      return createElement('optgroup', props, ...children)
    } else {
      let key = null
      let ref = null
      if (props.ref) {
        ref = props.ref
        delete props.ref
      }
      if (props.key) {
        key = '' + props.key
        delete props.key
      }
      ;(props as any).children = children
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'optgroup',
        props,
        key,
        ref
      } as DOMElement<HTMLProps<HTMLOptGroupElement>, HTMLOptGroupElement>
    }
  }
}
export function optgroupC(
  ...children: ReactNode[]
): DOMElement<HTMLProps<HTMLOptGroupElement>, HTMLOptGroupElement> {
  if (process.env.NODE_ENV !== 'production') {
    return createElement('optgroup', {}, ...children)
  } else {
    return ({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'optgroup',
      props: { children },
      key: null,
      ref: null
    } as any) as DOMElement<HTMLProps<HTMLOptGroupElement>, HTMLOptGroupElement>
  }
}
