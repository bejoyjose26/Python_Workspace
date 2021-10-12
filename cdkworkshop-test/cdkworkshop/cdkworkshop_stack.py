from aws_cdk import (
    core,
    aws_apigateway as apigw,
    aws_lambda as _lambda,
)
from cdk_dynamo_table_viewer import TableViewer
from .hitcounter import HitCounter

class CdkworkshopStack(core.Stack):

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        my_lambda = _lambda.Function(
            self, 'HelloHandeler',
            runtime=_lambda.Runtime.PYTHON_3_7,
            code=_lambda.Code.asset('lambda'),
            handler='hello.handler'
        )

        hello_with_counter = HitCounter(
            self, 'HelloHitCounter',
            downstream=my_lambda,
        )

        apigw.LambdaRestApi(
            self, 'Endpoint',
            handler=hello_with_counter.handler,
        )
        TableViewer(
            self, 'ViewHitCounter',
            title='Hello Hits',
            table=hello_with_counter.table,
        )  