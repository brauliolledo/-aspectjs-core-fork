import { AdviceTarget } from '../target/annotation-target';
import { AnnotationRef, AnnotationType } from '../annotation.types';
/**
 * @public
 */
export declare abstract class AnnotationContext<T = unknown, A extends AnnotationType = any> extends AnnotationRef {
    readonly args: any[];
    readonly target: AdviceTarget<T, A>;
}
//# sourceMappingURL=annotation.context.d.ts.map